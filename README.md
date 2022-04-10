1. npm run build

2. copy the files into nginx server
scp -i ~/myAWSAccount/mykey.pem dist/webtest.html ec2-user@ec2-54-85-129-223.compute-1.amazonaws.com:/tmp
scp -i ~/myAWSAccount/mykey.pem dist/main.js ec2-user@ec2-54-85-129-223.compute-1.amazonaws.com:/tmp


3. local test server:

npm run start
