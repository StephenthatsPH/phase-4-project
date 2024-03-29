class ProgramsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET /topprograms
    def topprograms
        @top = []
        programs = Program.all
        bestprograms = programs.map do |p|
            p.reviews.select do |r|
                if r[:rating] >= 4
                    @top << p
                end
            end
        end
        render json: @top.uniq
    end

    # GET /programs
    def index 
        programs = Program.all
        render json: programs, include: :reviews
    end

    # POST /programs
    def create 
        program = Program.new(program_params)
        if program.save
            render json: program, status: :created
        else
            render json: { errors: program.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /programs/:id shows specific program
    def show 
        program = find_program
        if program
            render json: program, include: :reviews
        else
            render json: { error: "Program not found" }, status: :not_found
        end
    end

    # PATCH /programs/:id
    def update 
        program = find_program
        program.update(program_params)
        render json: program, except: [:created_at, :updated_at]
    end

    # DELETE /programs/:id
    def destroy 
        program = find_program
        if program
            program.destroy
            head :no_content
        else
            render json: { errors: 'Program not found' }, status: :not_found
        end
    end


    # Private methods start here
    private

    def find_program
        Program.find(params[:id])
    end


    # Strong params (permit only these attributes) for mass assignment protection
    def program_params 
        params.permit(:id, :name, :hospital, :website, :specialty, :pgy1salary, :program_size, :program_age, :state, :city, :area_type)
    end

    def render_not_found_response 
        render json: { error: "Program not found" }, status: :not_found
    end

end
