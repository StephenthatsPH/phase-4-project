class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :handle_invaild
    before_action :authorized
    

    private

    def current_user
        user = User.find_by(id: session[:user_id])
        return user
    end

    def authorized
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
    end
    
    def handle_invaild
        render json: { errors: exception.record.errors.full_messages }, status: 422
    end
end
