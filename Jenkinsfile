Jenkinsfile (Declarative Pipeline)
pipeline {
  agent { docker 'node:12.14.1' }
  stages {
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}