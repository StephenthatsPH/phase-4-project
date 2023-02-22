class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    
    def create
        user = User.new(user_params)
    
        if user.save
            session[:user_id] = user.id
            render json: { user: UserSerializer.new(user) }, status: :created
        else
            render json: { errors: user.errors.full_messages.to_sentence }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
    

    private
    
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
    end
    
end