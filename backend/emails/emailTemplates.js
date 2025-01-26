export function createWelcomeEmailTemplate(name, profileUrl) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to SkillSphere</title>
    <style>
      body {
        font-family: "Dosis", sans-serif;
        line-height: 1.6;
        color: #e6edf3;
        background-color: #161b22;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #4d5562, #8b949e);
        padding: 30px;
        text-align: center;
        border-radius: 10px 10px 0 0;
        color: #e6edf3;
      }
      .header img {
        width: 120px;
        margin-bottom: 20px;
        border-radius: 10px;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: bold;
      }
      .content {
        background-color: #24292f;
        padding: 30px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }
      .content p {
        font-size: 18px;
        margin: 0 0 15px;
        color: #a1a7af;
      }
      .highlight-box {
        background-color: #1c2128;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
      }
      .highlight-box p {
        font-size: 16px;
        margin: 0 0 10px;
        color: #58a6ff;
        font-weight: bold;
      }
      .highlight-box ul {
        margin: 0;
        padding-left: 20px;
        color: #e6edf3;
      }
      .button-container {
        text-align: center;
        margin: 30px 0;
      }
      .button-container a {
        background-color: #8b949e;
        color: #161b22;
        padding: 14px 28px;
        text-decoration: none;
        border-radius: 30px;
        font-weight: bold;
        font-size: 16px;
        transition: background-color 0.3s;
      }
      .button-container a:hover {
        background-color: #93a4b1;
      }
      .footer {
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
        color: #a1a7af;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="../../frontend/public/logo.png" alt="SkillSphere Logo" />
      <h1>Welcome to SkillSphere!</h1>
    </div>
    <div class="content">
      <p><strong>Hello ${name},</strong></p>
      <p>
        We're excited to have you join our professional network! SkillSphere is
        your space to connect, grow, and excel in your career journey.
      </p>
      <div class="highlight-box">
        <p>Get started with these steps:</p>
        <ul>
          <li>Complete your profile to showcase your skills</li>
          <li>Connect with like-minded professionals</li>
          <li>Explore learning opportunities tailored to your goals</li>
          <li>Join communities to share and grow together</li>
        </ul>
      </div>
      <div class="button-container">
        <a href="${profileUrl}">Complete Your Profile</a>
      </div>
      <p>
        Need assistance? Our support team is here to help you at every step.
      </p>
      <p>Best regards,<br />The SkillSphere Team</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} SkillSphere. All rights reserved.
    </div>
  </body>
</html>

  `;
}

export const createConnectionAcceptedEmailTemplate = (
  senderName,
  recipientName,
  profileUrl
) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Connection Request Accepted</title>
    <style>
      body {
        font-family: "Dosis", sans-serif;
        line-height: 1.6;
        color: #e6edf3;
        background-color: #161b22;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      .header {
        background: linear-gradient(to right, #8b949e, #4d5562);
        padding: 30px;
        text-align: center;
        border-radius: 10px 10px 0 0;
      }

      .header img {
        width: 120px;
        margin-bottom: 20px;
        border-radius: 10px;
      }

      .header h1 {
        color: #e6edf3;
        margin: 0;
        font-size: 28px;
        font-weight: bold;
      }

      .content {
        background-color: #24292f;
        padding: 30px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }

      .content p {
        font-size: 18px;
        margin: 0 0 15px;
        color: #a1a7af;
      }

      .highlight-box {
        background-color: #1c2128;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
      }

      .highlight-box p {
        font-size: 16px;
        margin: 0 0 10px;
        color: #58a6ff;
        font-weight: bold;
      }

      .highlight-box ul {
        margin: 0;
        padding-left: 20px;
        color: #e6edf3;
      }

      .button-container {
        text-align: center;
        margin: 30px 0;
      }

      .button-container a {
        background-color: #8b949e;
        color: #161b22;
        padding: 14px 28px;
        text-decoration: none;
        border-radius: 30px;
        font-weight: bold;
        font-size: 16px;
        transition: background-color 0.3s;
      }

      .button-container a:hover {
        background-color: #93a4b1;
      }

      .footer {
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
        color: #a1a7af;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img
        src="../../frontend/public/logo.png"
        alt="SkillSphere"
      />
      <h1>Connection Accepted!</h1>
    </div>
    <div class="content">
      <p><strong>Hello ${senderName},</strong></p>
      <p>
        Great news! <strong>${recipientName}</strong> has accepted your connection
        request on SkillSphere.
      </p>
      <div class="highlight-box">
        <p>What's next?</p>
        <ul>
          <li>Check out ${recipientName}'s full profile</li>
          <li>Send a message to start a conversation</li>
          <li>Explore mutual connections and interests</li>
        </ul>
      </div>
      <div class="button-container">
        <a href="${profileUrl}">View ${recipientName}'s Profile</a>
      </div>
      <p>
        Expanding your professional network opens up new opportunities. Keep
        connecting!
      </p>
      <p>Best regards,<br />The SkillSphere Team</p>
    </div>
  </body>
</html>

`;

export const createCommentNotificationEmailTemplate = (
  recipientName,
  commenterName,
  postUrl,
  commentContent
) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Comment on Your Post</title>
    <style>
      body {
        font-family: "Dosis", Arial, sans-serif;
        line-height: 1.6;
        color: #e6edf3;
        background-color: #161b22;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      .header {
        background: linear-gradient(to right, #8b949e, #4d5562);
        padding: 30px;
        text-align: center;
        border-radius: 10px 10px 0 0;
      }

      .header img {
        width: 120px;
        margin-bottom: 20px;
        border-radius: 10px;
      }

      .header h1 {
        color: #e6edf3;
        margin: 0;
        font-size: 28px;
        font-weight: bold;
      }

      .content {
        background-color: #24292f;
        padding: 30px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }

      .content p {
        font-size: 18px;
        margin: 0 0 15px;
        color: #a1a7af;
      }

      .comment-box {
        background-color: #1c2128;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
      }

      .comment-box p {
        font-style: italic;
        margin: 0;
        color: #93a4b1;
      }

      .button-container {
        text-align: center;
        margin: 30px 0;
      }

      .button-container a {
        background-color: #8b949e;
        color: #161b22;
        padding: 14px 28px;
        text-decoration: none;
        border-radius: 30px;
        font-weight: bold;
        font-size: 16px;
        transition: background-color 0.3s;
      }

      .button-container a:hover {
        background-color: #93a4b1;
      }

      .footer {
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
        color: #a1a7af;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="../../frontend/public/logo.png" alt="SkillSphere Logo" />
      <h1>New Comment on Your Post</h1>
    </div>
    <div class="content">
      <p><strong>Hello ${recipientName},</strong></p>
      <p>${commenterName} has commented on your post:</p>
      <div class="comment-box">
        <p>"${commentContent}"</p>
      </div>
      <div class="button-container">
        <a href="${postUrl}">View Comment</a>
      </div>
      <p>
        Stay engaged with your network by responding to comments and fostering
        discussions.
      </p>
      <p>Best regards,<br />The SkillSphere Team</p>
    </div>
  </body>
</html>

`;
