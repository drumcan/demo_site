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
  if params[:error] == "access_denied"
    redirect_to action: "new"
  else

  result = @@gateway.oauth.create_token_from_code(
    :code => params[:code]
  )

    @partner_merchant = PartnerMerchant.new
    @partner_merchant.merchant_id = params[:merchantId]
    @partner_merchant.access_token = result.credentials.access_token
    @partner_merchant.refresh_token = result.credentials.refresh_token
    @partner_merchant.save
    redirect_to action: "show", id: @partner_merchant.id
  end
end

def show
  @partner_merchant = PartnerMerchant.find(params[:id])
end

def show_all
  @partner_merchants = PartnerMerchant.all
end

end
