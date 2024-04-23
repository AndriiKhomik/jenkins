pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage ('Build') {
            steps {
                echo "Building..."
                sh '''
                    cd app
                '''
            }
        }
        stage ('Test') {
            steps {
                echo "Testing..."
                sh '''
                    cd app
                '''
            }
        }
        stage ('Stage') {
            steps {
                echo "Staging..."
                sh '''
                    cd app
                '''
            }
        }
        stage ('Deliver') {
            steps {
                echo "Delivering..."
                sh '''
                    cd app
                '''
            }
        }
    }
}