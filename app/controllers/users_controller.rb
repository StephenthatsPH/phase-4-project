class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    
    # GET /me
    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end
        
    # POST /signup
    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json:  user, status: :created
        else
            render json: { errors: user.errors.full_messages.to_sentence }, status: :unprocessable_entity
        end
    end

    # PATCH /users/:id
    def update 
        user = User.find(session[:user_id])
        user.update(update_params)
        render json: user, except: [:created_at, :updated_at]
    end

    private
    
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password, :password_confirmation)
    end

    def update_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number)
    end

end