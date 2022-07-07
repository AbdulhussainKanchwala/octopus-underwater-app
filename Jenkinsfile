pipeline {
    agent any

    stages {
        stage('Git clone') {
            steps {
                echo 'Hello World'
                git branch: 'main', url: 'https://github.com/AbdulhussainKanchwala/octopus-underwater-app.git'
            }
        }
        stage('Build') { 
            steps { 
                script{
                 app = docker.build("underwater")
                }
            }
        }
        stage('Test'){
            steps {
                 echo 'Empty'
            }
        }
    }
}
