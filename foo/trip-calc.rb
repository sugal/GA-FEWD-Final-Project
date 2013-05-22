puts 'enter the distance'
distance=gets.chomp.to_f

puts 'enter the miles per gallon'
miles_pg=gets.chomp.to_f

puts 'cost per gallon'
cost_pg=gets.chomp.to_f

puts 'enter speed'
speed=gets.chomp.to_f

def time_taken(distance, speed)
(distance / speed).to_f
end


def trip_cost(distance, cost_pg, miles_pg)
((distance/ miles_pg) * cost_pg).to_f
end

if speed.to_f > 60 
	miles_pg=miles_pg.to_f-2
end

a = time_taken(distance, speed)
b = trip_cost(distance, cost_pg, miles_pg)

puts "Your trip will take #{a} hrs and costs $#{b}" 	