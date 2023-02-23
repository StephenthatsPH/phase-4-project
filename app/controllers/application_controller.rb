class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invaild
    before_action :authorize

    private
    def authorize
        @current_user = User.find_by(id: session[:user_id])
    
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end
    
    def handle_invaild
        render json: { errors: exception.record.errors.full_messages }, status: 422
    end
end
