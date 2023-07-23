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
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    def update
        user = find_user
        if params[:password] && params[:password_confirmation]
            # Update password
            if user.update(password: params[:password], password_confirmation: params[:password_confirmation])
                render json: { message: 'Password updated successfully' }
            else
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        else 
            # Update user info
            if user.update(update_params)
                render json: { message: 'Profile updated successfully' }
            else
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        end
    end
    private
    
    def find_user
        User.find(session[:user_id])
    end

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :medyear, :password, :password_confirmation)
    end

    def update_params
        params.require(:user).permit(:id, :first_name, :last_name, :email, :medyear)
    end

    def pword_params
        params.require(:user).permit(:id, :password, :password_confirmation)
    end

end