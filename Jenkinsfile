pipeline {
    // Define Docker as the agent to run the pipeline
    agent {
        docker {
            // alwaysPull true
            // Use the specified Docker image for the pipeline
            // image 'coexcz/node-alpine:v16.14.2'
            image 'node:18-alpine3.16'
        }
    }
    
    // Set the HOME environment variable to the current directory
    environment {
        HOME = '.'
    }
    
    // Define a trigger to poll the SCM every 5 minutes
    triggers {
        pollSCM 'H/5 * * * *'
    }
    
    // Define the stages of the pipeline
    stages {
        
        // Build stage: responsible for building the Node.js application
        stage ('Build') {
            steps {
                echo "Building..."
                sh '''
                    pwd                 // Print current directory
                    node -v             // Print Node.js version

                '''
                // Stash the build directory to be used in the 'Deliver' stage
                // stash includes: 'build/**', name: 'my-build'
            }
        }
        
        // Test stage: placeholder for testing the application
        stage ('Test') {
            steps {
                echo "Testing..."
                sh '''
                    pwd                 // Print current directory
                '''
            }
        }
        
        // Stage stage: placeholder for staging the application
        stage ('Stage') {
            steps {
                echo "Staging..."
                sh '''
                    ls -a               // List all files in the current directory
                '''
            }
        }
        
        // Deliver stage: responsible for delivering the built application
        stage ('Deliver') {
            steps {
                echo "Delivering..."
                unstash 'my-build'                   // Unstash the 'build' directory from the 'Build' stage
                sh '''
                    ls -a                           // List all files in the current directory

                '''
            }
        }
    }
}
