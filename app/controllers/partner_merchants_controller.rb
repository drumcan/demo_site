class PartnerMerchantsController < ApplicationController

@@gateway = Braintree::Gateway.new(
      :client_id => "client_id$sandbox$h92cnzmcmsfcsvhv",
      :client_secret => "client_secret$sandbox$af1565bda3835e96c64ca697446a5436",
    )

def new
  @url = @@gateway.oauth.connect_url(
    :merchant_id => "yxb4zvxjdctbbppt",
    :redirect_uri => "https://braintree-auth.herokuapp.com/success",
    :scope => "grant_payment_method"
  )
  p @url
  @partner_merchant = PartnerMerchant.new
end

def create
end

def success
  result = gateway.oauth.create_token_from_code(
    :code => params[:code]
  )
  p access_token = result.credentials.access_token
  p expires_at = result.credentials.expires_at
  p refresh_token = result.credentials.refresh_token
end

def show
end

end
