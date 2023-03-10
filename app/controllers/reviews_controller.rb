class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # skip_before_action :authorized, only: :user_programs

    # def user_programs
    #     if params[:user_id]
    #         user = find_user
    #         programs = user.programs
    #     else
    #         render json: { errors: 'Programs not found' }, status: :not_found
    #     end
    #     render json: programs, include: [:programs]
    # end

    # GET /reviews
    def index 
        reviews = Review.all
        render json: reviews, include: :programs
    end

    # POST /reviews
    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    # PATCH /programs/:id
    def update
        review = find_review
        review.update(review_params)
        render json: review, include: :program
    end

    # DELETE /reviews/:id
    def destroy
        review = find_review
        if review
            review.destroy
            head :no_content
        else
            render json: { errors: 'Review not found' }, status: :not_found
        end
    end


    # Private methods start here
    private

    def find_review
        Review.find(params[:id])
    end

    def find_user
        User.find(params[:user_id])
    end

    # Strong params (permit only these attributes) for mass assignment protection
    def review_params
        params.permit(:id, :text, :rating, :program_id, :user_id)
    end

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

end