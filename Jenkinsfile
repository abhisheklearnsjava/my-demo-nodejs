pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:$PATH"
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Enter the Git branch to build')
    }

    stages {

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        

        stage('Start app') {
            steps {
                sh 'nohup npm start > app.log 2>&1 &'
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
