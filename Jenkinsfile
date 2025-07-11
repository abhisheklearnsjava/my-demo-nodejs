pipeline {
    agent any

   // environment {
       // PATH = "/opt/homebrew/bin:$PATH"
        
    //}

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Enter the Git branch to build')
    }

    stages {

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        

        stage('Start app') {
            steps {
                bat 'npm start'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
