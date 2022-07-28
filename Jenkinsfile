pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                 app = docker.build("emsimages")
                }
            }
        }
        stage('Test'){
            steps {
                 echo 'Empty'
            }
        }
        stage('Deploy') {
            steps {
                script{
                        docker.withRegistry('https://027522505557.dkr.ecr.us-west-1.amazonaws.com/jenkinstest', 'ecr:us-west-1:aws-cred') {
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                    }
                }
            }
        }
        stage('Upload to S3 Bucket') {
              steps {
                  withAWS(region:'us-west-1',credentials:'ecr:us-west-1:aws-cred') {
                  sh 'echo "Uploading content with AWS creds"'
                     s3Delete(bucket:'emsbilling.org', path:'/')
                     s3Upload(file:'static', bucket:'emsbilling.org', path:'/')
                  }
              }
         }
    }
}
