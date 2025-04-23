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
                dir('/') {
                    bat 'docker build -t journal-app .'
                }
            }
        }

        stage('Docker Run') {
            steps {
                dir('/') {
                    bat 'docker-compose -f docker-compose.yml up -d'
                }
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
