class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # skip_before_action :authorized, only: :user_programs

    # GET /reviews
    def index 
        reviews = Review.all
        render json: reviews, include: :programs
    end

    # POST /reviews
    def create
        review = current_user.reviews.build(review_params)
        if review.save
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
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
        current_user.reviews.find(params[:id])
    end

    # Strong params (permit only these attributes) for mass assignment protection
    def review_params
        params.permit(:text, :rating, :program_id)
    end

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

end