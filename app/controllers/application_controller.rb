class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # before_action :authorized
    
    private

    # def current_user
    #     @current_user ||= User.find_by(id: session[:user_id])
    # end
    
    # def logged_in?
    #     !!current_user
    # end
    
    # def authorized
    #     render json: { error: 'Please log in' }, status: :unauthorized unless logged_in?
    # end

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end
