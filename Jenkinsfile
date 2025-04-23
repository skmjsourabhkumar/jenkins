pipeline {
    agent any

    triggers {
        githubPush() // Triggers build on GitHub push
    }
    
    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/skmjsourabhkumar/jenkins.git'
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
                sh 'npm test'
            }
        }
        stage('Docker Build') {
            steps {
                    bat 'docker build -t employee-management-container .'
                
            }
        }

        stage('Docker Run') {
            steps {
                    bat 'docker-compose -f docker-compose.yml up -d'
                
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add your deployment script/command here
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
        always {
            cleanWs()
        }
    }
}
