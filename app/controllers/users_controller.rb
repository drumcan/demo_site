class UsersController < ApplicationController
  before_action :signed_in_user, only: [:index, :edit, :update, :destroy]
  before_action :correct_user, only: [:edit, :update]

  def new
  	@user = User.new
  	@client_token = Braintree::ClientToken.generate()
  end

  def create 
  	@user = User.new(user_params)
  	@user.payment_token = token_create(params[:payment_method_nonce])
  	@subscription = subscription_create(@user.payment_token, params[:plan])
  	@user.subscription_id = @subscription.id
  	@user.plan = @subscription.plan_id
  	if @user.save
  	  sign_in @user
      flash[:success] = "Welcome to the Sample App!"
      redirect_to @user
    else 
      render 'new'
    end
 end


  def show
  	@user = User.find(params[:id])
  end

  def current_user=(user)
    @current_user = user
  end


private 

def token_create(payment_nonce)

  @result = Braintree::Customer.create(
    :payment_method_nonce => payment_nonce)
  
    if @result.success?
      return @result.customer.payment_methods[0].token
    else
    p @result.errors
  end
end

def subscription_create(token, plan)

	@result = Braintree::Subscription.create(
		:payment_method_token => token,
		:plan_id => plan)

	if @result.success?
	  return @result.subscription
    else
      p @result.errors
    end
  end

def correct_user
    @user = User.find(params[:id])
    redirect_to(root_url) unless current_user?(@user)
end



def user_params
	params.require(:user).permit(:name, :email, :password, :password_confirmation)
end

end
