import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

# Load from environment variables (set in .env)
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
MY_EMAIL = os.getenv("EMAIL_ADDRESS", "")
MY_PASSWORD = os.getenv("EMAIL_PASSWORD", "")


def send_message(user_email: str, user_name: str, message: str):
    """
    Send an email when people message me through my portfolio
    Args:
        user_email: The user's email address.
        user_name: The user's name.
        message: the message people send
    """
    if not MY_EMAIL or not MY_PASSWORD:
        return ("[EmailService] SMTP credentials not configured. Skipping email.")

    subject = f"Message from {user_name}"

    html_body = f"""
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px;
                    padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #3a6fd8;">Message from {user_name}</h2>
          <p style="color: #4b5363; font-size: 16px;">{message}</p>
          <p style="color: #4b5363; font-size: 16px;"><strong>From:</strong> {user_email}</p>
        </div>
      </body>
    </html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = user_email
    msg["To"] = MY_EMAIL
    msg.attach(MIMEText(html_body, "html"))

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.ehlo()
            server.starttls()
            server.login(MY_EMAIL, MY_PASSWORD)
            server.sendmail(MY_EMAIL, MY_EMAIL, msg.as_string())
        return (f"[EmailService] Alert sent to {MY_EMAIL}")
    except Exception as e:
        return (f"[EmailService] Failed to send email: {e}")
