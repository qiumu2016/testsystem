
export default{
 	check_length(data){
        data = data *1
        var tep = data 
        var result = data
        if(data>8000)
            result = 8000
        else if(data<0.1)
            result = 0.1
        else if(tep.toString().split(".")[1].length>=1){
            var litter = tep.toString().split(".")[1][0] * 1
            if(litter > 7)
                result = parseInt(data) + 0.7
            else if(litter == 0)
                result =parseInt(data)
            else result = parseInt(data) + litter*0.1
        }
        return result
    },
    check_frame(data){
        data = data *1
        var result = parseInt(data)
        if(data<1)
            result = 1
        else if(data >2000000000)
            result = 2000000000
        return result
    },
    check_err(data){
        return data * 1
    }
	
}
