class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invaild
    before_action :authorized

    private
    def authorized
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
    
    def handle_invaild
        render json: { errors: exception.record.errors.full_messages }, status: 422
    end
end
