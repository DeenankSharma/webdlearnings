var house_keeper ={
    h_name : 'shanti',
    num : '4885685848',
    exp:12,
    places:['bathroom','office'],
}

function HouseKeeper(h_name,num,exp,places){
    this.h_name=h_name;
    this.num=num;
    this.exp=exp;
    this.places=places;
    this.clean=function(){
        alert("room is being cleaned!");
    };
}

