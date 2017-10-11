'use strict'
const store = require('../store')
const bucketlistEvents = require('../bucketlist/events')

const signUpSuccess = function (data) {
  store.user = data.user
  store.token = data.user.token
  $('.message-form').html('Successfully signed up. Please log in!')
  clearForm()
}
const signUpFailure = function () {
  $('.message-form').html('Error on sign up')
}

const signInSuccess = function (data) {
  store.user = data.user
  store.token = data.user.token
  store.isSignedIn = true
  clearForm()
  $('#examples').hide()

  $('.content').css('display', 'none')
  $('.message-form').html('Successfully signed in')
  $('#account').modal('hide')
  // listEvents.getLists()
  $('.create-list-btn').show()
  $('#modal-sign-in').modal('hide')
  $('.message-form').html('')
  $('#btn-sign-up').hide()
  $('#btn-sign-in').hide()
  $('#btn-change-password').show()
  $('#btn-sign-out').show()
  bucketlistEvents.onGetBucketList()
}

const signInFailure = function (error) {
  console.error(error)
  $('.message-form').html('Error on sign in')
  clearForm()
}

const changePasswordSuccess = (data) => {
  clearForm()
  $('#sign-out').show()
  $('.message-form').html('Successfully changed password')
}

const changePasswordFailure = () => {
  $('.message-form').html('Error on change password')
  clearForm()
}
const signOutSuccess = function (data) {
  store.user = null
  store.isSignedIn = false
  $('.message-form').html('Successfully signed out')
  $('#account').modal('hide')
  $('.content').hide()
  $('.create-list-btn').hide()
  $('#examples').show()
  $('#btn-sign-up').show()
  $('#btn-sign-in').show()
  $('#btn-change-password').hide()
  $('#btn-sign-out').hide()
}

const signOutFailure = function () {
  $('.message-form').html('Error on sign out')
  $('#sign-out').hide()
  $('#examples').show()
}
const clearForm = function () {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}