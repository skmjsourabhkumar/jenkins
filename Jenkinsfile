pipeline {
    agent any
    name 'Employee-Management-React-App'  // Name for the pipeline

    environment {
        NODE_HOME = "/usr/local/node"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/skmjsourabhkumar/jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build App') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deployment logic here'
                }
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
