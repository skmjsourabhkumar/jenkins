pipeline {
    agent any

    environment {
        NODE_HOME = "/usr/local/node"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/skmjsourabhkumar/employee-management-react.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy logic goes here'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}

