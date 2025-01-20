import React from "react";

const page = () => {
  return (
    <div className="h-full">
      <div className="head-text-pro flex justify-center">My Projects</div>

      <div>
        <div className="project-container">
        <div className="project-card" id="project1">
            <div className="project-number project-number-right">01</div>
            <div className="project-content project-content-left">
              <div className="project-skills-container">
                <img className="project-skill" src="/assets/icons/jenkins.png" alt="" />
                <img className="project-skill" src="/assets/icons/maven.png" alt="" />
                <img className="project-skill" src="/assets/icons/jfrog.png" alt="" />
                <img className="project-skill" src="/assets/icons/docker.png" alt="" />
              </div>
              <h2 className="project-heading">
                End-to-End CI/CD Pipeline Implementation Using Jenkins and Docker 
              </h2>
                <ul className="project-sub-heading">
                  <li>• Designed and implemented a robust CI/CD pipeline leveraging tools like Jenkins, Docker, 
                  SonarQube, Maven, and Trivy.</li>
                  <li>• Automated build, test, and deployment processes to ensure code quality, security 
                  compliance, and deployment readiness.</li>
                  <li>• Utilized AWS EC2 for infrastructure setup and configured reusable Jenkins shared libraries for scalable and efficient
                  automation workflows.</li>
                </ul>
              <div className="btn-grp">
                <a href="https://github.com/Mor-ty/Jenkins-CI-Pipeline" target="_blank" className="btn-pink btn-project">
                  Link
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" id="project2">
            <div className="project-number project-number-left">02</div>
            <div className="project-content project-content-right ml-[25%]">
              <div className="project-skills-container">
                <img className="project-skill" src="/assets/icons/aws.png" alt="" />
                <img className="project-skill" src="/assets/icons/cloudwatch.png" alt="" />
                <img className="project-skill" src="/assets/icons/python.png" alt="" />
                <img className="project-skill" src="/assets/icons/boto3.png" alt="" />
              </div>
              <h2 className="project-heading">
                Job Recommendation Engine using AWS
              </h2>
              <ul className="project-sub-heading">
                  <li>• Designed and implemented a robust CI/CD pipeline leveraging tools like Jenkins, Docker, 
                  SonarQube, Maven, and Trivy.</li>
                  <li>• Automated build, test, and deployment processes to ensure code quality, security 
                  compliance, and deployment readiness.</li>
                  <li>• Utilized AWS EC2 for infrastructure setup and configured reusable Jenkins shared libraries for scalable and efficient
                  automation workflows.</li>
                </ul>
                <div className="btn-grp">
                <a href="https://github.com/Mor-ty/content-recommendation.git" target="_blank" className="btn-pink btn-project">
                  Link
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" id="project3">
            <div className="project-number project-number-right">03</div>
            <div className="project-content project-content-left">
              <div className="project-skills-container">
                <img className="project-skill" src="/assets/icons/awsdis.png" alt="" />
                <img className="project-skill" src="/assets/icons/lambda.png" alt="" />
                <img className="project-skill" src="/assets/icons/dynamo.png" alt="" />
                <img className="project-skill" src="/assets/icons/cloudwatch.png" alt="" />
              </div>
              <h2 className="project-heading">
                Cloud Migration Strategy Planner
              </h2>
              <ul className="project-sub-heading">
                  <li>• Developed a Cloud Migration Strategy Planner using AWS Discovery Service.</li>
                  <li>• The tool analyzes existing on-premises infrastructure, recommends suitable migration strategies, estimates costs, and
                  provides a comprehensive roadmap for the migration.</li>
                  <li>• Key AWS Services utilized: AWS Application Discovery Service for data collection, Lambda for processing, and DynamoDB
                  for metadata storage.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
