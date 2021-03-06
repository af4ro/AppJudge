# AppJudge
## Introduction
AppJudge is a judging application desgined for [AppJam+](https://www.appjamplus.org/). This application gives the admin the options to add/edit/delete events, teams, mentors, students, questions and judges. The admin can also see the scores in a table form after the judges have scored their assigned teams. The judges have the ability to login and scores their assigned teams.

## Snapshots
![Judge Side](/assets/appjudge_judge.gif)
![Admin Side](/assets/appjudge_admin.gif)

# Installation
## Pre Req
- Docker
- NodeJS

## Spin up instances

From the home directory 
1) Export environment varibles:
```
export REACT_APP_APPJUDGE_SERVICE_URL=http://localhost
```

2) Run the "up" script to spin up Docker Container:
```
./up
```

3) In another command line populate DB with custom values:
```
./dbup
```

## Accessing information
After the above steps
1) Open front-end on [localhost:3007](http://localhost:3007)

2) Check for any database changes by directly putting in the getall link like [localhost/judges](http://localhost/judges)

