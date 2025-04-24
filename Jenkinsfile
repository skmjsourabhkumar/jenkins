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
                    sh 'docker build -t employee-management-container .'
                
            }
        }

//         stage('Docker Run') {
//     steps {
//         script {
//             sh 'docker-compose -f docker-compose.yml up -d'
//         }
//     }
// }
        // stage('Docker Build') {
        //     steps {
        //         script {
        //             // Build the Docker image with a tag
        //             sh 'docker build -t employee-management-container .'
        //         }
        //     }
        // }

        // stage('Docker Run') {
        //     steps {
        //         script {
        //             // Stop and remove the container if it exists to avoid conflict
        //             sh 'docker rm -f employee-management-container || true'
        //             // Start the Docker container with docker-compose
        //             sh 'docker-compose -f docker-compose.yml up -d'
        //         }
        //     }
        // }
//         stage('Docker Run') {
//     steps {
//         script {
//             sh 'docker rm -f employee-management-container || true'
//             sh 'docker run -d -p 3000:80 --name employee-management-container employee-management-frontend'
//         }
//     }
// }
    

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
