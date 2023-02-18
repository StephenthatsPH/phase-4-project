class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    # GET /reviews
    def index
        review = Review.all.order(rating: :asc)
        render json: reviews, include: :program
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
            render json: { error: 'Review not found' }, status: :not_found
        end
    end


    # Private methods start here
    private

    def find_review
        review.find(params[:id])
    end


    # Strong params (permit only these attributes) for mass assignment protection
    def review_params
        params.permit(:post, :rating)
    end

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

end