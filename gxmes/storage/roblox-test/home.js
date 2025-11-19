<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found - luminalOS</title>
    
    <!-- Link to the same fonts used in your OS for consistency -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <!-- Link to Font Awesome for the icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

    <style>
        /* Define the accent color from your OS to maintain branding */
        :root {
            --accent-color: #4a90e2; 
        }

        /* Basic setup for a full-screen, dark theme */
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            font-family: 'Poppins', sans-serif;
            background-color: #1a1a1a;
            color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* The main container for the content, with a subtle fade-in animation */
        .container {
            text-align: center;
            animation: fadeIn 0.8s ease-out;
            padding: 20px;
        }

        /* Styling for the big "404" text */
        h1 {
            font-size: clamp(8rem, 25vw, 15rem); /* Responsive font size */
            font-weight: 700;
            margin: 0;
            color: rgba(255, 255, 255, 0.1); /* Makes it subtle and sleek */
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
        }

        /* Styling for the main message */
        h2 {
            font-size: 1.5rem;
            margin-top: -2rem; /* Pulls the message up slightly over the 404 */
            font-weight: 500;
            color: var(--accent-color);
        }

        /* Styling for the helper text */
        p {
            font-size: 1rem;
            color: #a0a0a0;
            max-width: 400px;
            margin: 10px auto 30px auto;
        }

        /* Button to go back to the OS, styled like your other os-buttons */
        .os-button {
            background-color: var(--accent-color);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease;
            display: inline-block;
        }

        .os-button:hover {
            background-color: #5aa1f2; /* A slightly lighter shade of the accent color */
            transform: translateY(-2px);
        }

        /* The fade-in animation */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved. Let's get you back to your desktop.</p>
        <a href="/" class="os-button">
            <i class="fa-solid fa-rocket"></i> Return to luminalOS
        </a>
    </div>

</body>
</html>