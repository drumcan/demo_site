class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

Braintree::Configuration.environment = :sandbox
Braintree::Configuration.merchant_id = 'yxb4zvxjdctbbppt'
Braintree::Configuration.public_key = 'xktj76v3mb4nt7wx'
Braintree::Configuration.private_key = '2632842e6df4fff163c877944980da46'

@@gateway = Braintree::Gateway.new(
    :client_id => "client_id$sandbox$h92cnzmcmsfcsvhv",
    :client_secret => "client_secret$sandbox$af1565bda3835e96c64ca697446a5436",
  )

  protect_from_forgery with: :exception
  include SessionsHelper
end
