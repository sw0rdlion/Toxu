module DiscourseStats
	class StatsController < ApplicationController

		def my_page
			render :json => { name: "Статистика аккаунта..." }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
