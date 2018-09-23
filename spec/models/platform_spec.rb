require 'rails_helper'

RSpec.describe Platform, type: :model do
	describe "Platform" do
		before :each do 
			@user = User.create(email: "email@test.com", password: "password")
			@platform_1 = Platform.create(name: "Twitter", api_base_url: "https://www.twitter.com/api/v1", user_id: @user.id)
		end
		
		it "is valid with name, api_base_url and user_id" do
			expect(@platform_1).to be_valid
		end
		
		it "belongs to a user" do
			expect(@platform_1.user).to eq(@user)
		end
		
		it "has many followed_accounts" do
			followed_account_1 = FollowedAccount.create(account_name: "tahbristol", account_id: 1234, platform_id: @platform_1.id)
			followed_account_1 = FollowedAccount.create(account_name: "alisufi", account_id: 4321, platform_id: @platform_1.id)

			expect(@platform_1.followed_accounts.size).to eq(2) 
		end
		
	end
end
