@app
remix-grunge-stack-8cf5

@aws
region eu-west-3
runtime nodejs16.x

@http
/*
  method any
  src server

@static

@tables
user
  pk *String

password
  pk *String # userId

note
  pk *String  # userId
  sk **String # noteId
