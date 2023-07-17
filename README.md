<!DOCTYPE html>
<html>
<head>
  <title>Data Engineering Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      flex-direction: row;
      padding: 20px;
    }

    .sidebar {
      flex: 0 0 250px;
    }

    .content {
      flex: 1;
      padding-left: 20px;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
    }

    img {
      width: 200px;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    .project {
      margin-bottom: 30px;
    }

    .project-title {
      font-size: 20px;
      color: #333;
      margin-bottom: 5px;
    }

    .project-description {
      color: #555;
    }

    .project-link {
      color: #007bff;
      text-decoration: none;
    }

    .project-link:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="sidebar">
      <img src="profile-image.jpg" alt="Profile Image">
      <ul>
        <li><a href="resume.pdf">Download Resume</a></li>
        <li><a href="https://github.com/bollig-michael">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/michael-bollig-b5aa7185/">LinkedIn</a></li>
      </ul>
    </div>
    <div class="content">
      <h1>Data Engineering Portfolio</h1>

      <div class="project">
        <h2 class="project-title">Project 1</h2>
        <p class="project-description">Short blurb about Project 1.</p>
        <a class="project-link" href="https://github.com/your-github-repo-1">
          <img src="project1-image.jpg" alt="Project 1 Image">
        </a>
      </div>

      <div class="project">
        <h2 class="project-title">Project 2</h2>
        <p class="project-description">Short blurb about Project 2.</p>
        <a class="project-link" href="https://github.com/your-github-repo-2">
          <img src="project2-image.jpg" alt="Project 2 Image">
        </a>
      </div>

      <div class="project">
        <h2 class="project-title">Project 3</h2>
        <p class="project-description">Short blurb about Project 3.</p>
        <a class="project-link" href="https://github.com/your-github-repo-3">
          <img src="project3-image.jpg" alt="Project 3 Image">
        </a>
      </div>
    </div>
  </div>
</body>
</html>
