def sum_with_for(min, max)
  # CONSTRAINT: you should use a for..end structure
  return -1 if min > max
  sum = 0

  for i in min..max
    sum += i
  end

 return sum
end

def sum_with_while(min, max)
  return -1 if min > max
  # CONSTRAINT: you should use a while..end structure
  sum = 0
  i = min
  while i <= max
    sum += i
    i += 1
  end

  return sum
end
