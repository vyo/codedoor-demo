#!/usr/bin/env node
'use strict'
const Path = require('path')
const Hapi = require('hapi')
const Inert = require('inert')

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: process.env['PORT'] || 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'static')
    }
  }
})

const provision = async () => {
  await server.register(Inert)

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './',
        redirectToSlash: true,
        index: true
      }
    }
  })

  await server.start()

  console.log('Server running at:', server.info.uri)
}

provision()
