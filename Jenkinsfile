pipeline {
    agent {
        docker {
            image 'coexcz/node-alpine:v16.14.2'
            args '-u root:sudo -v -v /var/lib/jenkins/workspace/React:/var/lib/jenkins/workspace/react'
            }
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
                    npm install
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