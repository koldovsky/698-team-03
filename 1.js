function buildFun(n){

	var res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
		  return i
		})
	}
	return res
}


for(var i = 0; i< 10; i++){
    console.log(buildFun(10)[i](), i);
}