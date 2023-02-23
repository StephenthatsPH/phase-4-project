class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    
    def create
        user = User.create(user_params)
        if user.save
            session[:user_id] = user.id
            render json: { user: user }, status: :created
        else
            render json: { errors: user.errors.full_messages.to_sentence }, status: :unprocessable_entity
        end
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end
    

    private
    
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
    end
    
end