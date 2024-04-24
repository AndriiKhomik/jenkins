pipeline {
    agent {
        docker {
            image 'coexcz/node-alpine:v16.14.2'
            }
    }
    environment {
        HOME = '.'
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
                    rm -r node_modules
                    npm install
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