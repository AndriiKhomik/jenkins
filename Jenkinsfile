pipeline {
    agent {
        docker {image 'node:20.11.1-alpine3.19'}
    }
    triggers {
        pollSCM 'H/5 * * * *'
    }
    stages {
        stage ('Build') {
            steps {
                echo "Building..."
                sh '''
                    pwd
                    node -v
                    npm -v
                    npm run build
                '''
            }
        }
        stage ('Test') {
            steps {
                echo "Testing..."
                sh '''
                    pwd
                '''
            }
        }
        stage ('Stage') {
            steps {
                echo "Staging..."
                sh '''
                    ls -a
                '''
            }
        }
        stage ('Deliver') {
            steps {
                echo "Delivering..."
                sh '''
                    ls -a
                '''
            }
        }
    }
}