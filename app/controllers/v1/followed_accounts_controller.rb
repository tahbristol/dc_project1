class V1::FollowedAccountsController < ApplicationController
  
  def destroy
    followed_account = current_user.followed_accounts.where(account_id: params[:id]).first
    followed_account.destroy unless followed_account.nil?
  end
end
