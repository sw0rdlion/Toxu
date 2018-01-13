module DiscourseChess
	class ChessController < ApplicationController

		def my_page
			render :json => { name: "Шахматы на Toxu.ru... " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end
