import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const ActivatePage = () => {
  const { token } = useParams();
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');
  const [resendStatus, setResendStatus] = useState(null); // null | 'sending' | 'sent' | 'error'
  const hasFetchedRef = useRef(false);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    fetch(`${BASE_URL}/api/organizations/activate/${token}/`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || 'Activation failed.');
        setMessage(data.detail || 'Activation successful.');
        setStatus('success');
      })
      .catch(err => {
        setMessage(err.message);
        setStatus('error');
      });
  }, [token, BASE_URL]);

  const handleResend = () => {
    const email = prompt('Enter the email used to register the organization:');
    if (!email) return;

    setResendStatus('sending');

    fetch(`${BASE_URL}/api/organizations/resend-activation/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.detail && data.detail.includes('sent')) {
          setResendStatus('sent');
        } else {
          setResendStatus('error');
        }
      })
      .catch(() => setResendStatus('error'));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Activating Your Organization</h2>

        {status === 'loading' && (
          <div style={styles.loadingContainer}>
            <div style={styles.dotsRow}>
              <div className="dot dot1" />
              <div className="dot dot2" />
              <div className="dot dot3" />
            </div>
            <p style={styles.message}>Please wait...</p>
          </div>
        )}

        {status === 'success' && (
          <div style={styles.resultContainer}>
            <div className="checkmark">&#10004;</div>
            <p style={{ ...styles.message, color: '#4caf50' }}>{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div style={styles.resultContainer}>
            <p style={{ ...styles.message, color: '#d32f2f' }}>{message}</p>

            {message.toLowerCase().includes('expired') && (
              <>
                <button
                  style={styles.resendButton}
                  onClick={handleResend}
                  disabled={resendStatus === 'sending'}
                >
                  {resendStatus === 'sending' ? 'Resending...' : 'Resend Activation Link'}
                </button>

                {resendStatus === 'sent' && (
                  <p style={{ color: '#4caf50', marginTop: '0.5rem' }}>
                    ✅ A new activation link has been sent!
                  </p>
                )}
                {resendStatus === 'error' && (
                  <p style={{ color: '#d32f2f', marginTop: '0.5rem' }}>
                    ❌ Failed to resend link. Please try again.
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <style>{cssStyles}</style>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '480px',
    width: '90%',
  },
  title: {
    color: '#1976d2',
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dotsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  message: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    fontWeight: 500,
  },
  resendButton: {
    marginTop: '1rem',
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

const cssStyles = `
.dot {
  width: 12px;
  height: 12px;
  background-color: #ffc107;
  border-radius: 50%;
  display: inline-block;
  animation: bounce 1.4s infinite ease-in-out;
}
.dot1 { animation-delay: 0s; }
.dot2 { animation-delay: 0.2s; }
.dot3 { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.checkmark {
  font-size: 3rem;
  color: #4caf50;
  animation: pop 0.5s ease-out;
}

@keyframes pop {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
`;

export default ActivatePage;
