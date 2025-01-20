exports.contactEmail = (firstName, lastName, email, countryCode, number, message) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
                border-radius : 10px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://rahul-portfolio-seven-beryl.vercel.app/"><img class="logo" 
            src="https://res.cloudinary.com/dfscqg5dc/image/upload/v1737387425/ImageDatabase_1/Screenshot_2025-01-20_at_8.38.56_PM_tgvded.png"
                    alt="EduCare Logo"></a>
            <div class="message">A connection request from ${firstName}</div>
            <div class="body">
                <p>Dear Rahul,</p>
                <p>I would like to connect with you. Please find my details given below :-</p>
                <ul>
                  <li>Name : ${firstName}${""}${lastName}</li>
                  <li>Email : ${email}</li>
                  <li>Phone Number : ${countryCode}${" "}${number}</li>
                  <li>Message : ${message}</li>
                </ul>
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
                    href="mailto:${email}">${email}</a>. I am here to help!</div>
        </div>
    </body>
    
    </html>`;
  };